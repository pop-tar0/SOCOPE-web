import React from "react";
import axios from 'axios';
import { UserInterface } from "../interface/User";

const SOCOPEUrl = 'http://localhost:8080';

export const fetchUserInfo = async (): Promise<UserInterface> => {
    try {
        const resp = await axios.get(`${SOCOPEUrl}/user/login`);
        console.log(resp);
        
        return resp.data.data;
        
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw new Error('Error fetching posts: ' + error.message);
        } else {
            throw new Error('Unknown error occurred');
        }
    }
};