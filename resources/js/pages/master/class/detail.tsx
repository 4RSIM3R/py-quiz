import { Tabs } from "@/components/ui";
import { AppLayout } from "@/layouts/app-layout";
import { ClassDetailSection } from "./components/detail_section";
import { ClassStudentSection } from "./components/student_section";

type ClassDetailProps = {
    payload: any,
}

export default function ClassDetail({ payload }: ClassDetailProps) {

    return (
        <Tabs>
            <Tabs.List>
                <Tabs.Tab id="detail">Detail</Tabs.Tab>
                <Tabs.Tab id="module">Module</Tabs.Tab>
                <Tabs.Tab id="student">Student</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel id="detail">
                <ClassDetailSection payload={payload} />
            </Tabs.Panel>
            <Tabs.Panel id="module">
                <ClassDetailSection payload={payload} />
            </Tabs.Panel>
            <Tabs.Panel id="student">
                <ClassStudentSection payload={payload} />
            </Tabs.Panel>
        </Tabs>
    )

}

ClassDetail.layout = (page: React.ReactNode) => <AppLayout children={page} />;