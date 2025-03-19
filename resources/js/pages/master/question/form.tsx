import { CustomSelect } from "@/components/custom-select";
import { Button, Textarea, TextField } from "@/components/ui";
import { AppLayout } from "@/layouts/app-layout";
import { FormResponse } from "@/utils/constant";
import { fetchCourse } from "@/utils/fetch";
import { useForm } from "@inertiajs/react";
import { IconCircleQuestionmark } from "justd-icons";

type QuestionFormProps = {
    payload: any;
};

export default function QuestionForm({ payload }: QuestionFormProps) {
    const { data, setData, errors, processing, post } = useForm<any>(payload);

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route("backoffice.master.question.store"), FormResponse);
    };

    return (
        <>
            <div className="flex justify-between">
                <div>
                    <h1 className="text-xl font-semibold">Question</h1>
                    <p className="text-sm text-gray-600">
                        Master Data Question
                    </p>
                </div>
                <div className="flex gap-4">
                    <Button intent="outline">
                        <IconCircleQuestionmark />
                    </Button>
                </div>
            </div>
            <form onSubmit={onSubmit} className="grid grid-cols-12 gap-4 my-4">
                <CustomSelect
                    className="col-span-12"
                    label="Course"
                    name="course"
                    placeholder="Select course"
                    defaultValue={null}
                    onChange={(value) => {
                        setData("course_id", value?.value);
                    }}
                    loadOptions={fetchCourse}
                    isRequired
                />
                <TextField
                    className="col-span-12"
                    label="Name"
                    name="name"
                    value={data.name}
                    autoComplete="one-time-code"
                    onChange={(v) => setData("name", v)}
                    errorMessage={errors?.name}
                    isRequired
                />
                <Textarea
                    className="col-span-12"
                    label="Code"
                    name="code"
                    value={data.code}
                    autoComplete="one-time-code"
                    onChange={(v) => setData("code", v)}
                    errorMessage={errors?.code}
                />
                <Textarea
                    className="col-span-12"
                    label="Test"
                    name="test"
                    value={data.test}
                    autoComplete="one-time-code"
                    onChange={(v) => setData("test", v)}
                    errorMessage={errors?.test}
                />
                <div className="col-span-12">
                    <Button isDisabled={processing} type="submit">
                        {processing ? "Processing..." : "Submit"}
                    </Button>
                </div>
            </form>
        </>
    );
}

QuestionForm.layout = (page: React.ReactNode) => <AppLayout children={page} />;
