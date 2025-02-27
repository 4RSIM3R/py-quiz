import { Button, TextField } from "@/components/ui";
import { AppLayout } from "@/layouts/app-layout";
import { FormResponse } from "@/utils/constant";
import { useForm } from "@inertiajs/react";
import { IconCircleQuestionmark } from "justd-icons";

type StudentFormProps = {
    payload: any;
};

export default function StudentForm({ payload }: StudentFormProps) {

    const { data, setData, errors, processing, post, put } = useForm<any>(payload);

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (payload) {
            put(route("backoffice.master.teacher.update", data.id), FormResponse);
        } else {
            post(route("backoffice.master.teacher.store"), FormResponse);
        }
    };

    return (
        <>
            <div className="flex justify-between">
                <div>
                    <h1 className="text-xl font-semibold">Student</h1>
                    <p className="text-sm text-gray-600">Master Data Student</p>
                </div>
                <div className="flex gap-4">
                    <Button appearance="outline">
                        <IconCircleQuestionmark />
                    </Button>
                </div>
            </div>
            <form onSubmit={onSubmit} className="grid grid-cols-12 gap-4 my-4">
                <TextField
                    className="col-span-12"
                    label="Name"
                    name="name"
                    value={data.name || ""}
                    autoComplete="off"
                    onChange={(v) => setData("name", v)}
                    errorMessage={errors?.name}
                    isRequired
                />
                <TextField
                    className="col-span-12"
                    label="Email"
                    name="email"
                    type="email"
                    value={data.email || ""}
                    autoComplete="off"
                    onChange={(v) => setData("email", v)}
                    errorMessage={errors?.email}
                />
                <TextField
                    className="col-span-12"
                    label="NIS"
                    name="nis"
                    value={data.nis || ""}
                    autoComplete="off"
                    onChange={(v) => setData("nis", v)}
                    errorMessage={errors?.nis}
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

StudentForm.layout = (page: React.ReactNode) => <AppLayout children={page} />;