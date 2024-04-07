


export const generateStaticParams = async () => {
    return new Array(3).fill('').map((_, index) => ({ id: `${index}` }));
};

export default ({ params }) => {

    return (
        <div>
            about detail
            <h1>
                {params?.id}
            </h1>
        </div>
    )
}