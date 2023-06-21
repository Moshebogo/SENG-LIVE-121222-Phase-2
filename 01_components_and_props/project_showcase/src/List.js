function List(props, subtitle) {
    const array =  [
        {car: 'one', key: 1},
        {car: 'two', key: 2},
        {car: 'three', key: 3}
    ]

        return (
            <>
            <ul>
                {array.map(arrayItem => 
                    <li>{arrayItem}</li>
                )}
            </ul>
            <h3>{subtitle}</h3>
            </>
        )
}

export default List