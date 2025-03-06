import { Tabs } from "@/components/ui";
import { AppLayout } from "@/layouts/app-layout";
import { ClassDetailSection } from "./components/detail_section";
import { ClassStudentSection } from "./components/student_section";

export default function ClassDetail() {

    return (
        <Tabs>
            <Tabs.List>
                <Tabs.Tab id="detail">Detail</Tabs.Tab>
                <Tabs.Tab id="student">Student</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel id="detail">
                <ClassDetailSection />
            </Tabs.Panel>
            <Tabs.Panel id="student">
                <ClassStudentSection />
            </Tabs.Panel>
        </Tabs>
    )

}

ClassDetail.layout = (page: React.ReactNode) => <AppLayout children={page} />;