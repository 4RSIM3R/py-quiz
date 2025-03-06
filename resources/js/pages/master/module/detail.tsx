import { Tabs } from "@/components/ui";
import { AppLayout } from "@/layouts/app-layout";
import { ModuleDetailSection } from "./components/detail_section";
import { ModuleCourseSection } from "./components/course_section";

export default function ModuleDetail() {

    return (
        <Tabs>
            <Tabs.List>
                <Tabs.Tab id="detail">Detail</Tabs.Tab>
                <Tabs.Tab id="student">Course</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel id="detail">
                <ModuleDetailSection />
            </Tabs.Panel>
            <Tabs.Panel id="student">
                <ModuleCourseSection />
            </Tabs.Panel>
        </Tabs>
    )

}

ModuleDetail.layout = (page: React.ReactNode) => <AppLayout children={page} />;