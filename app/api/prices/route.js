import User from '@models/user';
import { NextResponse } from 'next/server';

export async function GET() {

    try {
        const prices = await User.find({});
        return NextResponse.json({ prices });
    }catch (e) {
        console.error(e);
    }

    
}


