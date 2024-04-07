

export const generateStaticParams = async () => {
    return [
        {slug: ['1', '2', '3']},
        {slug: ['4', '5', '6']},
        {slug: ['7', '8', '9']}
    ];
};

export default ({ params }) => {
    return (
        <div>
            about slug detail
            {params?.slug?.map((v) => v)}
        </div>
    )
}