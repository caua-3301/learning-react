export const MyInput = ( { hadleChange, filterPage } ) => {

    return (
        <input onChange={hadleChange} value={filterPage} type="search" />
    )
}