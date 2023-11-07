import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(res => res.json());

const UserInfoPage = () => {
    const router = useRouter();
    const { query } = router;
    const { id } = query;

    const { data, error } = useSWR(id ? `https://dummyjson.com/users/${id}` : null, fetcher);

    if (error) {
        return <h1>Error occurred</h1>;
    }

    if (!data) {
        return <h1>Loading....</h1>;
    }

    const userInfo = data; 

    return (
        <div>
            <h1>{userInfo?.firstName}</h1>
            <h1>{userInfo?.email}</h1>
        </div>
    );
};

export default UserInfoPage;
