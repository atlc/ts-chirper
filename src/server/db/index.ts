import * as mysql from 'mysql';
import config from '../config';
import Chirps from './queries/chirps';

const pool = mysql.createPool(config.mysql);


export const Query = <T = any>(query, values?: any) => {
    return new Promise<T>((resolve, reject) => {
        pool.query(query, values, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        })
    })
}


export default {
    Chirps
}