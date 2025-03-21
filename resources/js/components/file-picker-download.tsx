import React from "react";
import { IconDownload } from "justd-icons";
import { Link } from "react-aria-components";
import { Button } from "@/components/ui";
import { FilePicker } from "./file-picker";
import { twMerge } from "tailwind-merge";

type FilePickerLayoutProps = {
    label: string;
    name: string;
    value?: string | null;
    onChange: (files: FileList | null) => void;
    accept?: string;
    isRequired?: boolean;
    prefix?: React.ReactNode;
    ref?: React.RefObject<HTMLInputElement>;
    className?: string | null;
};

export const FilePickerDownload: React.FC<FilePickerLayoutProps> = ({
    label,
    name,
    value,
    onChange,
    accept,
    isRequired,
    prefix,
    ref,
    className
}) => {
    const computedIsRequired = !value && isRequired;
    const getFileName = () => {
        if (!value) return '';
        if (typeof value === 'string') return value.split("/").pop();
        if (value && typeof value === 'object' && 'name' in value) return (value as File).name;
        return '';
    };

    return (
        <div className={twMerge("flex items-center gap-4", className)}>
            <div className="flex-grow">
                <FilePicker
                    className="w-full"
                    label={label}
                    name={name}
                    value={value}
                    onChange={onChange}
                    accept={accept}
                    isRequired={computedIsRequired}
                    prefix={prefix}
                    ref={ref!}
                />
                <span className="text-sm text-muted-fg">
                    Selected File: {getFileName()}
                </span>
            </div>
            {value && (
                <FileDownload href={value} />
            )}
        </div>
    );
};

type FileDownloadProps = {
    href: string;
};

const FileDownload: React.FC<FileDownloadProps> = ({ href }) => (
    <Link className="mt-2" href={href} target="_blank">
        <Button size="medium" intent="outline" className="whitespace-nowrap">
            <IconDownload />
            Download
        </Button>
    </Link>
);
