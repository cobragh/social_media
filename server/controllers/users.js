import { request } from "express";
import User from "../models/User";

// READ
export const getUser = (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user)
  } catch (error) {
    res.status(404).json({ error: error });
  }
};

export const getUserFriends = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        const friends = await Promise.all(user.friends.map((id) => 
            User.findById(id))
        );
        const formattedFriends = friends.map(
            ({_id, firstName, lastName, occupation, location, picurePatch}) =>
                {return {_id, firstName, lastName, occupation, location, picurePatch};
            }
        );
        res.status(200).json(formattedFriends);
    } catch (error) {
        res.status(404).json({message: error.message});
    } 
}

// UPDATE
export const addRemoveFriend = async (req, res) => {
    try {
        const {id, friendId} = req.params
        const user = await User.findById(id);
        const friend = await User.findByFriendId(friendId);
        if(user.friends.includes(friendId)){
            user.friends = user.friends.filter((id) => id !== friendId);
            friend.friends =  user.friends.filter((id) => id !== id );
        }else{
            user.friends.push(friendId);
            friend.friends.push(id)
        }
        await user.save();
        await friend.save();

        const friends = await Promise.all(user.friends.map((id) => 
        User.findById(id))
    );
        const formattedFriends = friends.map(
        ({_id, firstName, lastName, occupation, location, picurePatch}) =>
            {return {_id, firstName, lastName, occupation, location, picurePatch};
        }
    );
    res.status(200).json(formattedFriends);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}