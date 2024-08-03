import axios from 'axios';
import { UserResponse } from "../interface/User";
import { SystemLoading } from '../interface/system';

const SOCOPEUrl = 'http://localhost:8080';

export const fetchWebAssets = async (): Promise<SystemLoading> => {
    try {
        const resp = await axios.get(`${ SOCOPEUrl }/system/webAssets`);
        return resp.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw new Error('Error fetching users information: ' + error.message);
        } else {
            throw new Error('Unknown error occurred');
        }
    }
};

export const fetchUserInfo = async (): Promise<UserResponse> => {
    try {
        const resp = await axios.get(`${ SOCOPEUrl }/user/login`);
        return resp.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw new Error('Error fetching users information: ' + error.message);
        } else {
            throw new Error('Unknown error occurred');
        }
    }
};
