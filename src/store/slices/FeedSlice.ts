import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    articles: [
        {
            id: 1,
            cover: 'https://placehold.co/2000',
            head: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore fugiat impedit maxime nesciunt omnis quidem, suscipit tempora voluptate. Est iste itaque similique unde! Debitis dolor laborum maxime minus obcaecati possimus repellendus reprehenderit, ut! Adipisci consequuntur delectus fugiat, illum modi sunt. Amet assumenda atque fugit neque officia perspiciatis quas quis sunt!',
            date: '2023-03-01'
        }
    ]
};

export const FeedSlice = createSlice({
    name: 'feed',
    initialState,
    reducers: { }
});
export default FeedSlice.reducer;