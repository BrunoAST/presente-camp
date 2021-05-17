const useNameToPrice = (name?: string) => {
    if (!name) return;

    return (name.length * 10);
};

export default useNameToPrice;
