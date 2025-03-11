import {
  Avatar,
  Button,
  Menu,
  Sidebar,
  SidebarContent,
  SidebarDisclosure,
  SidebarDisclosureGroup,
  SidebarDisclosurePanel,
  SidebarDisclosureTrigger,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarItem,
  SidebarLabel,
  SidebarNav,
  SidebarProvider,
  SidebarTrigger
} from "@/components/ui"; import { PagePropsData } from "@/types";
import { FormResponse } from "@/utils/constant";
import { Link, useForm, usePage } from "@inertiajs/react";
import {
  IconBook,
  IconChartAnalytics,
  IconChevronLgDown,
  IconLogout,
  IconServerStack,
  IconSettings
} from "justd-icons";
import { PropsWithChildren } from "react";
import { Toaster } from "sonner";

export const AppLayout = (props: PropsWithChildren) => {

  const { post } = useForm<any>();

  const { user } = usePage<PagePropsData>().props.auth;

  const onLogout = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    post(route('auth.logout'), FormResponse);
  };

  const admin: any = [
    {
      icon: IconBook,
      label: "Master Data",
      items: [
        {
          label: "Class",
          icon: IconBook,
          href: route('backoffice.master.class.index')
        },
        {
          label: "Course",
          icon: IconBook,
          href: route('backoffice.master.course.index')
        },
        {
          label: "Module",
          icon: IconBook,
          href: route('backoffice.master.module.index')
        },
        {
          label: "Student",
          icon: IconBook,
          href: route('backoffice.master.student.index')
        },
        {
          label: "Teacher",
          icon: IconBook,
          href: route('backoffice.master.teacher.index')
        },
        {
          label: "Question",
          icon: IconBook,
          href: route('backoffice.master.question.index')
        },
      ]
    },
    {
      icon: IconSettings,
      label: "Setting",
      items: [
        {
          label: "Level",
          icon: IconSettings,
          href: route('backoffice.master.teacher.index')
        },
      ],
    }
  ];

  const student = [
    {
      icon: IconBook,
      label: "Master",
      items: [
        {
          label: "Course",
          icon: IconBook,
          href: route('backoffice.master.course.index')
        },
        {
          label: "Module",
          icon: IconBook,
          href: route('backoffice.master.module.index')
        },
      ],
    }
  ];

  const mapRoleToMenu: Record<string, any> = {
    'admin': admin,
    'student': student,
    'teacher': admin,
  };

  return (
    <SidebarProvider className="bg-white" >
      <Sidebar intent="default" collapsible="dock" className="bg-white" >
        <SidebarHeader>
          <Link
            className="flex items-center gap-x-2 group-data-[collapsible=dock]:size-10 group-data-[collapsible=dock]:justify-center"
            href={route('backoffice.index')}
          >
            <IconServerStack className="text-emerald-800 size-4.5" />
            <SidebarLabel className="font-medium">Console</SidebarLabel>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          {mapRoleToMenu[user.roles[0].name].map((section: any, index: any) => (
            <SidebarDisclosureGroup key={index}>
              <SidebarDisclosure id={index + 1}>
                <SidebarDisclosureTrigger>
                  <section.icon className="text-black size-4" />
                  <SidebarLabel className="font-medium text-black" > {section.label}</SidebarLabel>
                </SidebarDisclosureTrigger>
                <SidebarDisclosurePanel>
                  {section.items.map((item: any, index: any) => (
                    <SidebarItem key={index} href={item.href}>
                      {() => (
                        <>
                          <item.icon className="hover:text-black size-4" />
                          <SidebarLabel className="hover:text-black" >{item.label}</SidebarLabel>
                        </>
                      )}
                    </SidebarItem>
                  ))}
                </SidebarDisclosurePanel>
              </SidebarDisclosure>
            </SidebarDisclosureGroup>
          ))}
        </SidebarContent>
        <SidebarFooter>
          <Menu>
            <Menu.Trigger aria-label="Profile" data-slot="menu-trigger">
              <Avatar shape="square" src="" />
              <div className="text-sm group-data-[collapsible=dock]:hidden">
                {user?.name ?? '-'}
                <span className="block -mt-0.5 text-muted-fg">{user?.email ?? '-'}</span>
              </div>
              <IconChevronLgDown className="absolute right-3 transition-transform size-4 group-pressed:rotate-180" />
            </Menu.Trigger>
            <Menu.Content placement="bottom right" className="sm:min-w-(--trigger-width)">
              <Menu.Section>
                <Menu.Header separator>
                  <span className="block">{user?.name ?? '-'}</span>
                  <span className="font-normal text-muted-fg">@cobain</span>
                </Menu.Header>
              </Menu.Section>

              <Menu.Item href="#">
                <IconLogout />
                <button onClick={onLogout} className="flex w-full">
                  Log out
                </button>
              </Menu.Item>
            </Menu.Content>
          </Menu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset className="overflow-hidden bg-white" >
        <SidebarNav className="flex justify-between w-full" >
          <span className="flex gap-x-4 items-center justify-between w-full">
            <SidebarTrigger className="-mx-2" />
            <Button intent="outline" size="extra-small" >
              <IconChartAnalytics />
            </Button>
          </span>
        </SidebarNav>
        <div className="p-5 overflow-x-hidden">
          <Toaster />
          {props.children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
