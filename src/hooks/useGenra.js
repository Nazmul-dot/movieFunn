const useGenra = (selectgenra) => {
    if (selectgenra.length < 1) return ''

    const genraID = selectgenra.map((g) => g.id)
    // genraID = 1 2 3 4 5 6
    return genraID.reduce((acc, curr) => acc + "," + curr)
    // genraID = 1,2,3,4,5,6
}
export default useGenra;