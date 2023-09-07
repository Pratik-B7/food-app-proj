import { useParams } from "react-router-dom"

export default function NextPage(){

    const {foodId} = useParams();


    return  <h2>Food Details {foodId}</h2>
}