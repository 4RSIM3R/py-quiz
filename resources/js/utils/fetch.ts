import { Base } from "@/types/base";
import axios from "axios";

export type SelectOption = {
    value: any;
    label: any;
};

export const fetchTeacher = async (search: any): Promise<SelectOption[]> => {
    const response = await axios.get<Base<any[]>>(route("backoffice.master.teacher.fetch"), {
        params: { 'filter[name]': search },
    });

    return (response.data.items ?? []).map((e: any) => ({
        value: e.id,
        label: e.name,
    }));
};

export const fetchStudent = async (search: any): Promise<SelectOption[]> => {
    const response = await axios.get<Base<any[]>>(route("backoffice.master.student.fetch"), {
        params: { 'filter[name]': search },
    });

    return (response.data.items ?? []).map((e: any) => ({
        value: e.id,
        label: e.name,
    }));
};

export const fetchClass = async (search: any): Promise<SelectOption[]> => {
    const response = await axios.get<Base<any[]>>(route("backoffice.master.class.fetch"), {
        params: { 'filter[name]': search },
    });

    return (response.data.items ?? []).map((e: any) => ({
        value: e.id,
        label: e.name,
    }));
};

export const fetchModule = async (search: any): Promise<SelectOption[]> => {
    const response = await axios.get<Base<any[]>>(route("backoffice.master.module.fetch"), {
        params: { 'filter[name]': search },
    });

    return (response.data.items ?? []).map((e: any) => ({
        value: e.id,
        label: e.name,
    }));
};

export const fetchCourse = async (search: any): Promise<SelectOption[]> => {
    const response = await axios.get<Base<any[]>>(route("backoffice.master.course.fetch"), {
        params: { 'filter[name]': search },
    });

    return (response.data.items ?? []).map((e: any) => ({
        value: e.id,
        label: e.name,
    }));
};