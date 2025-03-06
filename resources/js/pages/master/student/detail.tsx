import { Tabs } from "@/components/ui";
import { AppLayout } from "@/layouts/app-layout";
import { StudentDetailSection } from "./component/detail_section";
import { StudentCourseSection } from "./component/course_section";

export default function StudentDetail() {
    return (
        <Tabs>
            <Tabs.List>
                <Tabs.Tab id="detail">Detail</Tabs.Tab>
                <Tabs.Tab id="student">Course</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel id="detail">
                <StudentDetailSection />
            </Tabs.Panel>
            <Tabs.Panel id="student">
                <StudentCourseSection />
            </Tabs.Panel>
        </Tabs>
    )
}

StudentDetail.layout = (page: React.ReactNode) => <AppLayout children={page} />;