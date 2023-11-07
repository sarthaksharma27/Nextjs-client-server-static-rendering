const UserPage = (props) => {
    return (
        <div>
            <h1>Profile page of {props.data.firstName}</h1>
        </div>
    );
};

export const getStaticPaths = async () => {
    try {
        const data = await (await fetch(`https://dummyjson.com/users`)).json();
        
        if (!data || !data.users) {
            return {
                paths: [],
                fallback: false
            };
        }

        const allUserIds = data.users.map(user => user.id);

        return {
            paths: allUserIds.map(userId => ({ params: { id: `${userId}` } })),
            fallback: false
        };
    } catch (error) {
        console.error("Error fetching user data:", error);
        return {
            paths: [],
            fallback: false
        };
    }
};

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data = await (await fetch(`https://dummyjson.com/users/${id}`)).json();
    return {
        props: {
            data,
        }
    };
};

export default UserPage;