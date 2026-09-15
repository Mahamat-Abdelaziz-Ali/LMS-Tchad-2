


function InstructorDashboard() {


    const menuItems = [
        {
            icon: BarChart,
            label: "Dashboard",
            component:  <InstructorDashboardPage
        />
        },
        {
            icons : Book,
            label : "Courses",
            value : "courses",
            component : 
        }
    ]

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <aside className="w-64 bg-white shadow-md hidden md:block">
                <div className="p-4">
                    <h2 className="text-2xl font-bold mb-4">InstructorView</h2>
                    <nav>

                    </nav>
                </div>
            </aside>
        </div>
    );
}

export default InstructorDashboard