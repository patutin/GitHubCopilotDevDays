const Card = (props: any) => {
    return (
        <div className="flex-1 flex flex-col p-8 bg-amber-100 rounded-lg shadow-lg divide-y divide-amber-200">
        {props.children}
        </div>
    );
    }

export default Card;