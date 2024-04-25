import { Outlet, useParams, useSearchParams } from "react-router-dom"

export default function Post() {
    const {id} = useParams();
    const [qs] = useSearchParams();

    return <div>Id: {id} qs: {qs.get('element')} outlet content {<Outlet />}</div>
}