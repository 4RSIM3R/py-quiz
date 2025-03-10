import { Button, TextField } from "@/components/ui";
import { AppLayout } from "@/layouts/app-layout";
import { FormResponse } from "@/utils/constant";
import { useForm } from "@inertiajs/react";
import { IconCircleQuestionmark } from "justd-icons";

type StudentFormProps = {
    payload: any;
};

export default function StudentForm({ payload }: StudentFormProps) {

    const { data, setData, errors, processing, post } = useForm<any>(payload);

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route("backoffice.master.student.store"), FormResponse);
    };

    return (
        <>
            <div className="flex justify-between">
                <div>
                    <h1 className="text-xl font-semibold">Student</h1>
                    <p className="text-sm text-gray-600">Master Data Student</p>
                </div>
                <div className="flex gap-4">
                    <Button intent="outline">
                        <IconCircleQuestionmark />
                    </Button>
                </div>
            </div>
            <form onSubmit={onSubmit} className="grid grid-cols-12 gap-4 my-4">
                <TextField
                    className="col-span-6"
                    label="Name"
                    name="name"
                    value={data.name}
                    autoComplete="one-time-code"
                    onChange={(v) => setData("name", v)}
                    errorMessage={errors?.name}
                    isRequired
                />
                <TextField
                    className="col-span-6"
                    label="NIS"
                    name="nis"
                    value={data.nis}
                    autoComplete="one-time-code"
                    onChange={(v) => setData("nis", v)}
                    errorMessage={errors?.nis}
                />
                <TextField
                    className="col-span-6"
                    label="Email"
                    name="email"
                    type="email"
                    value={data.email}
                    autoComplete="one-time-code"
                    onChange={(v) => setData("email", v)}
                    errorMessage={errors?.email}
                />
                <TextField
                    className="col-span-6"
                    label="Password"
                    name="password"
                    value={data.password}
                    autoComplete="one-time-code"
                    onChange={(v) => setData("password", v)}
                    errorMessage={errors?.nis}
                    type="password"
                    isRevealable={true}
                />
                <TextField
                    className="col-span-6"
                    label="Password Confirmation"
                    name="password_confirmation"
                    value={data.password_confirmation}
                    autoComplete="one-time-code"
                    onChange={(v) => setData("password_confirmation", v)}
                    errorMessage={errors?.password_confirmation}
                    type="password"
                    isRevealable={true}
                />
                <div className="col-span-12">
                    <Button isDisabled={processing} type="submit">
                        {processing ? "Processing..." : "Submit"}
                    </Button>
                </div>
            </form>
        </>
    )

}

StudentForm.layout = (page: React.ReactNode) => <AppLayout children={page} />;