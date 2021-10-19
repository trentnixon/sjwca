//import { articles } from '../../../data'
import {API} from "../../config/index"

export default function handler(req, res) {
    let Path = `${API}/misson`;
    console.log('Path', Path)
    res.status(200).json(Path)
}