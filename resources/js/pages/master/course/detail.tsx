import { Tabs } from "@/components/ui";
import { AppLayout } from "@/layouts/app-layout";
import { CourseDetailSection } from "./components/detail_section";
import { CourseQuestionSection } from "./components/question_section";

type CourseDetailProps = {
    payload: any,
}

export default function CourseDetail({ payload }: CourseDetailProps) {

    return (
        <Tabs>
            <Tabs.List>
                <Tabs.Tab id="detail">Detail</Tabs.Tab>
                <Tabs.Tab id="question">Question</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel id="detail">
                <CourseDetailSection payload={payload} />
            </Tabs.Panel>
            <Tabs.Panel id="question">
                <CourseQuestionSection payload={payload} />
            </Tabs.Panel>
        </Tabs>
    )

}

CourseDetail.layout = (page: React.ReactNode) => <AppLayout children={page} />;