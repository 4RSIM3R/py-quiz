import { CustomSelect } from "@/components/custom-select";
import { FilePickerDownload } from "@/components/file-picker-download";
import { Button, TextField } from "@/components/ui";
import { AppLayout } from "@/layouts/app-layout";
import { FormResponse } from "@/utils/constant";
import { fetchModule } from "@/utils/fetch";
import { useForm } from "@inertiajs/react";
import { IconCircleQuestionmark, IconFile } from "justd-icons";

type CourseFormProps = {
    payload: any,
}

export default function CourseForm({ payload }: CourseFormProps) {

    const { data, setData, errors, processing, post, put } = useForm<any>(payload);

    const handleFileChange = (field: keyof any, files: FileList | null) => {
        if (files && files[0]) {
            setData(field, files[0] || null);
        } else {
            setData(field, null);
        }
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (payload) {
            put(route("backoffice.master.course.update", data.id), FormResponse);
        } else {
            post(route("backoffice.master.course.store"), FormResponse);
        }
    };

    return (
        <>
            <div className="flex justify-between">
                <div>
                    <h1 className="text-xl font-semibold">Course</h1>
                    <p className="text-sm text-gray-600">Master Data Course</p>
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
                    label="Module"
                    name="module"
                    placeholder="Select Module"
                    defaultValue={{ value: payload?.module_id, label: payload?.module_name }}
                    onChange={(value) => {
                        setData("module_id", value?.value);
                        setData("module_name", value?.label);
                    }}
                    loadOptions={fetchModule}
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
                <TextField
                    className="col-span-12"
                    label="Description"
                    name="desc"
                    value={data.desc}
                    autoComplete="one-time-code"
                    onChange={(v) => setData("desc", v)}
                    errorMessage={errors?.desc}
                />
                <FilePickerDownload
                    className="col-span-12"
                    label="Material"
                    name="material"
                    value={payload?.material}
                    onChange={(files) => handleFileChange("material", files)}
                    accept=".doc,.docx,.pdf"
                    prefix={<IconFile />}
                />
                <div className="col-span-12 my-3">
                    <Button isDisabled={processing} type="submit">
                        {processing ? "Processing..." : "Submit"}
                    </Button>
                </div>
            </form>
        </>
    )

}

CourseForm.layout = (page: React.ReactNode) => <AppLayout children={page} />;