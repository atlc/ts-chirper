import { Query } from './index';

const all = async () => Query('SELECT * from Chirps');
const chirp_by_id = async (id: number) => Query('SELECT * from Chirps where id = ?', [id]);
const new_chirp = async (userId: number, content: string, location: string) => Query('INSERT into Chirps (userid, content, location) VALUES (?, ?, ?)', [userId, content, location]);
const update_chirp = async (id: number, content: string) => Query('UPDATE Chirps SET content = ? where id = ?', [content, id]);
const delete_chirp = async (id: number) => Query('DELETE from Chirps where id = ?', [id]);


export default {
    all,
    chirp_by_id,
    new_chirp,
    update_chirp,
    delete_chirp
}