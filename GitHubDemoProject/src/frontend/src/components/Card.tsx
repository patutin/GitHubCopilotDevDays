const Card = (props: any) => {
    return (
        <div className="flex-1 flex flex-col p-8 bg-u-surface rounded-lg shadow-lg divide-y divide-u-green-deep border border-u-green-deep/30">
        {props.children}
        </div>
    );
    }

export default Card;