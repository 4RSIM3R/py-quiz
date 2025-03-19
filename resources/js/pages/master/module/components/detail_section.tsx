import { Button, TextField } from "@/components/ui";
import { FormResponse } from "@/utils/constant";
import { useForm } from "@inertiajs/react";
import { IconCircleQuestionmark } from "justd-icons";

type ModuleDetailSectionProps = {
    payload: any;
};

export const ModuleDetailSection = ({ payload }: ModuleDetailSectionProps) => {
    const { data, setData, errors, processing, put } = useForm<any>(payload);

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(route("backoffice.master.module.update", data.id), FormResponse);
    };

    return (
        <div>
            <div className="flex justify-between">
                <div>
                    <h1 className="text-xl font-semibold">Module</h1>
                    <p className="text-sm text-gray-600">Master Data Module</p>
                </div>
                <div className="flex gap-4">
                    <Button intent="outline">
                        <IconCircleQuestionmark />
                    </Button>
                </div>
            </div>
            <form onSubmit={onSubmit} className="grid grid-cols-12 gap-4 my-4">
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
                <div className="col-span-12 my-3">
                    <Button isDisabled={processing} type="submit">
                        {processing ? "Processing..." : "Submit"}
                    </Button>
                </div>
            </form>
        </div>
    );
};
