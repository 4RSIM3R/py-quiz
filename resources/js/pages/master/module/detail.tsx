import { Tabs } from "@/components/ui";
import { AppLayout } from "@/layouts/app-layout";
import { ModuleDetailSection } from "./components/detail_section";
import { ModuleCourseSection } from "./components/course_section";

type ModuleDetailProps = {
    payload: any;
};

export default function ModuleDetail({ payload }: ModuleDetailProps) {
    return (
        <Tabs>
            <Tabs.List>
                <Tabs.Tab id="detail">Detail</Tabs.Tab>
                <Tabs.Tab id="course">Course</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel id="detail">
                <ModuleDetailSection payload={payload} />
            </Tabs.Panel>
            <Tabs.Panel id="course">
                <ModuleCourseSection />
            </Tabs.Panel>
        </Tabs>
    );
}

ModuleDetail.layout = (page: React.ReactNode) => <AppLayout children={page} />;
