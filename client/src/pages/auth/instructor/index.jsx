import {Button} from "@/components/ui/button";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import InstructorCourses from "@/components/instructor-view/courses";
import { BarChart, Book, LogOut } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import InstructorDashboard from "@/components/instructor-view/dashboard";
import { AuthContext } from "@/context/auth-context";
import { fetchInstructorCourseListService } from "@/services";
import { InstructorContext } from "@/context/instructor-context";



function InstructorDashboardPage() {

    const [activeTab, setActiveTab]= useState("dashboard");

    const {resetCredentials} = useContext(AuthContext);
    const {instructorCoursesList, setInstructorCoursesList} = useContext(InstructorContext);
    async function fetchAllCourses() {
        const response = await fetchInstructorCourseListService();

        console.log(response);
        if(response?.success) setInstructorCoursesList(response?.data)
    }

    useEffect(()=>{
        fetchAllCourses()
    }, [])

    const menuItems = [
        {
            icon: BarChart,
            label: "Dashboard",
            value: "dashboard",
            component:  <InstructorDashboard
        />
        },
        {
            icons : Book,
            label : "Courses",
            value : "courses",
            component :  <InstructorCourses listOfCourses ={instructorCoursesList}/>
        },
        {
            icon : LogOut,
            label : "logout"
        }
    ];

    function handleLogout() {
        resetCredentials();
        sessionStorage.clear();

        }
        
    return (
        <div className="flex h-full min-h-screen bg-gray-100">  //h-full important to flex-col
            <aside className="w-64 bg-white shadow-md hidden md:block">
                <div className="p-4">
                    <h2 className="text-2xl font-bold mb-4">InstructorView</h2>
                    <nav>
                        {
                            menuItems.map(menuItem =>   <Button
                            className ="w-full justify-start mb-2"
                            key= {menuItem.value}
                            variant={activeTab === menuItem.value ? "secondary" : "ghost"}
                            onClick= {menuItem.value === "logout" ? 

                                handleLogout : ()=>setActiveTab(menuItem.value)
                            }
                            >
                                 <menuItem.icon className = "mr-2 h-4 w-4"/>
                                 {menuItem.label}
                            </Button>)
                        }
                    </nav>
                </div>
            </aside>
             <main className="flex-1 p-8 overflow-y-auto">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold mb-8">
                        Dashboard
                    </h1>
                    <Tabs value = {activeTab} onvalueChange = {setActiveTab}>
                        {
                            menuItems.map(menuItem =>  <TabsContent value = {menuItem.value}>
                                {
                                    menuItem.component !== null ? menuItem.component : null
                                }
                            </TabsContent>)
                        }
                    </Tabs>
                </div>
             </main>
        </div>
    );
}

export default InstructorDashboard