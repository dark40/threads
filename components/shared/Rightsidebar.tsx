function RightSidebar () {
    return (
        <section className="custom-scrollbar rightsidebar">
            {/* Suggested Communities */}
            <div className="flex flex-1 flex-col justify-start">
                <h3 className="text-heading4-medium text-light-1">Suggested Communities</h3>
            </div>

            {/* Suggested User */}
            <div className="flex flex-1 flex-col justify-start">
                <h3 className="text-heading4-medium text-light-1">Suggested User</h3>
            </div>
        </section>
    )
}

export default RightSidebar