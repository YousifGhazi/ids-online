"use client";

import { useForm } from "@mantine/form";
import {
  Container,
  Paper,
  TextInput,
  Button,
  Title,
  Text,
  Stack,
  Center,
  NumberInput,
} from "@mantine/core";
import { IconLogin, IconAlertCircle, IconPhone } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { useLogin, useSendOTP } from "@/features/auth/api";
import { useAuthStore } from "@/features/auth/store";
import { useRouter } from "@/i18n/navigation";
import { notifications } from "@mantine/notifications";
import { useState } from "react";

export default function LoginPage() {
  const t = useTranslations();
  const router = useRouter();
  const login = useLogin();
  const sendOTP = useSendOTP();
  const { setAuth } = useAuthStore();

  const [phone, setPhone] = useState("");

  const form = useForm<{
    otp: string | undefined;
    phone: string;
  }>({
    initialValues: {
      phone: "",
      otp: undefined,
    },
  });

  const handleSubmit = form.onSubmit(async (values) => {
    if (values?.otp) {
      // await login.mutateAsync(
      //   { phone, otp: String(values.otp) },
      //   {
      //     // onSuccess: (data) => {
      //     //   setAuth(
      //     //     {
      //     //       id: 12,
      //     //       name: "يوسف عدي",
      //     //       phone: "07829476806",
      //     //       type: "admin",
      //     //       created_at: "2025-08-24T07:06:06.000000Z",
      //     //       updated_at: "2025-08-24T07:06:06.000000Z",
      //     //       roles: [
      //     //         {
      //     //           id: 1,
      //     //           name: "Admin",
      //     //           type: "admin",
      //     //           created_at: "2025-08-16T19:32:11.000000Z",
      //     //           updated_at: "2025-08-16T19:32:11.000000Z",
      //     //           permissions: [
      //     //             {
      //     //               id: 1,
      //     //               name: "admin-templates-list",
      //     //               type: "admin",
      //     //               created_at: "2025-08-16T19:32:11.000000Z",
      //     //               updated_at: "2025-08-16T19:32:11.000000Z",
      //     //             },
      //     //             {
      //     //               id: 2,
      //     //               name: "admin-create-template",
      //     //               type: "admin",
      //     //               created_at: "2025-08-16T19:32:11.000000Z",
      //     //               updated_at: "2025-08-16T19:32:11.000000Z",
      //     //             },
      //     //             {
      //     //               id: 3,
      //     //               name: "admin-update-template",
      //     //               type: "admin",
      //     //               created_at: "2025-08-16T19:32:11.000000Z",
      //     //               updated_at: "2025-08-16T19:32:11.000000Z",
      //     //             },
      //     //             {
      //     //               id: 4,
      //     //               name: "admin-show-template",
      //     //               type: "admin",
      //     //               created_at: "2025-08-16T19:32:11.000000Z",
      //     //               updated_at: "2025-08-16T19:32:11.000000Z",
      //     //             },
      //     //             {
      //     //               id: 5,
      //     //               name: "admin-delete-template",
      //     //               type: "admin",
      //     //               created_at: "2025-08-16T19:32:11.000000Z",
      //     //               updated_at: "2025-08-16T19:32:11.000000Z",
      //     //             },
      //     //             {
      //     //               id: 6,
      //     //               name: "admin-organizations-list",
      //     //               type: "admin",
      //     //               created_at: "2025-08-16T19:32:11.000000Z",
      //     //               updated_at: "2025-08-16T19:32:11.000000Z",
      //     //             },
      //     //             {
      //     //               id: 7,
      //     //               name: "admin-create-organization",
      //     //               type: "admin",
      //     //               created_at: "2025-08-16T19:32:11.000000Z",
      //     //               updated_at: "2025-08-16T19:32:11.000000Z",
      //     //             },
      //     //             {
      //     //               id: 8,
      //     //               name: "admin-update-organization",
      //     //               type: "admin",
      //     //               created_at: "2025-08-16T19:32:11.000000Z",
      //     //               updated_at: "2025-08-16T19:32:11.000000Z",
      //     //             },
      //     //             {
      //     //               id: 9,
      //     //               name: "admin-show-organization",
      //     //               type: "admin",
      //     //               created_at: "2025-08-16T19:32:11.000000Z",
      //     //               updated_at: "2025-08-16T19:32:11.000000Z",
      //     //             },
      //     //             {
      //     //               id: 10,
      //     //               name: "admin-delete-organization",
      //     //               type: "admin",
      //     //               created_at: "2025-08-16T19:32:11.000000Z",
      //     //               updated_at: "2025-08-16T19:32:11.000000Z",
      //     //             },
      //     //             {
      //     //               id: 11,
      //     //               name: "admin-members-list",
      //     //               type: "admin",
      //     //               created_at: "2025-08-16T19:32:11.000000Z",
      //     //               updated_at: "2025-08-16T19:32:11.000000Z",
      //     //             },
      //     //             {
      //     //               id: 12,
      //     //               name: "admin-create-member",
      //     //               type: "admin",
      //     //               created_at: "2025-08-16T19:32:11.000000Z",
      //     //               updated_at: "2025-08-16T19:32:11.000000Z",
      //     //             },
      //     //             {
      //     //               id: 13,
      //     //               name: "admin-update-member",
      //     //               type: "admin",
      //     //               created_at: "2025-08-16T19:32:11.000000Z",
      //     //               updated_at: "2025-08-16T19:32:11.000000Z",
      //     //             },
      //     //             {
      //     //               id: 14,
      //     //               name: "admin-show-member",
      //     //               type: "admin",
      //     //               created_at: "2025-08-16T19:32:11.000000Z",
      //     //               updated_at: "2025-08-16T19:32:11.000000Z",
      //     //             },
      //     //             {
      //     //               id: 15,
      //     //               name: "admin-delete-member",
      //     //               type: "admin",
      //     //               created_at: "2025-08-16T19:32:11.000000Z",
      //     //               updated_at: "2025-08-16T19:32:11.000000Z",
      //     //             },
      //     //             {
      //     //               id: 16,
      //     //               name: "admin-identities-list",
      //     //               type: "admin",
      //     //               created_at: "2025-08-16T19:32:11.000000Z",
      //     //               updated_at: "2025-08-16T19:32:11.000000Z",
      //     //             },
      //     //             {
      //     //               id: 17,
      //     //               name: "admin-create-identity",
      //     //               type: "admin",
      //     //               created_at: "2025-08-16T19:32:11.000000Z",
      //     //               updated_at: "2025-08-16T19:32:11.000000Z",
      //     //             },
      //     //             {
      //     //               id: 18,
      //     //               name: "admin-update-identity",
      //     //               type: "admin",
      //     //               created_at: "2025-08-16T19:32:11.000000Z",
      //     //               updated_at: "2025-08-16T19:32:11.000000Z",
      //     //             },
      //     //             {
      //     //               id: 19,
      //     //               name: "admin-show-identity",
      //     //               type: "admin",
      //     //               created_at: "2025-08-16T19:32:11.000000Z",
      //     //               updated_at: "2025-08-16T19:32:11.000000Z",
      //     //             },
      //     //             {
      //     //               id: 20,
      //     //               name: "admin-delete-identity",
      //     //               type: "admin",
      //     //               created_at: "2025-08-16T19:32:11.000000Z",
      //     //               updated_at: "2025-08-16T19:32:11.000000Z",
      //     //             },
      //     //             {
      //     //               id: 21,
      //     //               name: "admin-users-list",
      //     //               type: "admin",
      //     //               created_at: "2025-08-16T19:32:11.000000Z",
      //     //               updated_at: "2025-08-16T19:32:11.000000Z",
      //     //             },
      //     //             {
      //     //               id: 22,
      //     //               name: "admin-create-user",
      //     //               type: "admin",
      //     //               created_at: "2025-08-16T19:32:11.000000Z",
      //     //               updated_at: "2025-08-16T19:32:11.000000Z",
      //     //             },
      //     //             {
      //     //               id: 23,
      //     //               name: "admin-update-user",
      //     //               type: "admin",
      //     //               created_at: "2025-08-16T19:32:11.000000Z",
      //     //               updated_at: "2025-08-16T19:32:11.000000Z",
      //     //             },
      //     //             {
      //     //               id: 24,
      //     //               name: "admin-show-user",
      //     //               type: "admin",
      //     //               created_at: "2025-08-16T19:32:11.000000Z",
      //     //               updated_at: "2025-08-16T19:32:11.000000Z",
      //     //             },
      //     //             {
      //     //               id: 25,
      //     //               name: "admin-delete-user",
      //     //               type: "admin",
      //     //               created_at: "2025-08-16T19:32:11.000000Z",
      //     //               updated_at: "2025-08-16T19:32:11.000000Z",
      //     //             },
      //     //             {
      //     //               id: 26,
      //     //               name: "admin-organization-users-list",
      //     //               type: "admin",
      //     //               created_at: "2025-08-16T19:32:12.000000Z",
      //     //               updated_at: "2025-08-16T19:32:12.000000Z",
      //     //             },
      //     //             {
      //     //               id: 27,
      //     //               name: "admin-create-organization-user",
      //     //               type: "admin",
      //     //               created_at: "2025-08-16T19:32:12.000000Z",
      //     //               updated_at: "2025-08-16T19:32:12.000000Z",
      //     //             },
      //     //             {
      //     //               id: 28,
      //     //               name: "admin-update-organization-user",
      //     //               type: "admin",
      //     //               created_at: "2025-08-16T19:32:12.000000Z",
      //     //               updated_at: "2025-08-16T19:32:12.000000Z",
      //     //             },
      //     //             {
      //     //               id: 29,
      //     //               name: "admin-show-organization-user",
      //     //               type: "admin",
      //     //               created_at: "2025-08-16T19:32:12.000000Z",
      //     //               updated_at: "2025-08-16T19:32:12.000000Z",
      //     //             },
      //     //             {
      //     //               id: 30,
      //     //               name: "admin-delete-organization-user",
      //     //               type: "admin",
      //     //               created_at: "2025-08-16T19:32:12.000000Z",
      //     //               updated_at: "2025-08-16T19:32:12.000000Z",
      //     //             },
      //     //             {
      //     //               id: 31,
      //     //               name: "admin-roles-list",
      //     //               type: "admin",
      //     //               created_at: "2025-08-16T19:32:12.000000Z",
      //     //               updated_at: "2025-08-16T19:32:12.000000Z",
      //     //             },
      //     //             {
      //     //               id: 32,
      //     //               name: "admin-create-role",
      //     //               type: "admin",
      //     //               created_at: "2025-08-16T19:32:12.000000Z",
      //     //               updated_at: "2025-08-16T19:32:12.000000Z",
      //     //             },
      //     //             {
      //     //               id: 33,
      //     //               name: "admin-update-role",
      //     //               type: "admin",
      //     //               created_at: "2025-08-16T19:32:12.000000Z",
      //     //               updated_at: "2025-08-16T19:32:12.000000Z",
      //     //             },
      //     //             {
      //     //               id: 34,
      //     //               name: "admin-show-role",
      //     //               type: "admin",
      //     //               created_at: "2025-08-16T19:32:12.000000Z",
      //     //               updated_at: "2025-08-16T19:32:12.000000Z",
      //     //             },
      //     //             {
      //     //               id: 35,
      //     //               name: "admin-delete-role",
      //     //               type: "admin",
      //     //               created_at: "2025-08-16T19:32:12.000000Z",
      //     //               updated_at: "2025-08-16T19:32:12.000000Z",
      //     //             },
      //     //             {
      //     //               id: 36,
      //     //               name: "admin-permissions-list",
      //     //               type: "admin",
      //     //               created_at: "2025-08-16T19:32:12.000000Z",
      //     //               updated_at: "2025-08-16T19:32:12.000000Z",
      //     //             },
      //     //             {
      //     //               id: 37,
      //     //               name: "admin-advertisements-list List",
      //     //               type: "admin",
      //     //               created_at: "2025-08-16T19:32:12.000000Z",
      //     //               updated_at: "2025-08-16T19:32:12.000000Z",
      //     //             },
      //     //             {
      //     //               id: 38,
      //     //               name: "admin-create-advertisement",
      //     //               type: "admin",
      //     //               created_at: "2025-08-16T19:32:12.000000Z",
      //     //               updated_at: "2025-08-16T19:32:12.000000Z",
      //     //             },
      //     //             {
      //     //               id: 39,
      //     //               name: "admin-update-advertisement",
      //     //               type: "admin",
      //     //               created_at: "2025-08-16T19:32:12.000000Z",
      //     //               updated_at: "2025-08-16T19:32:12.000000Z",
      //     //             },
      //     //             {
      //     //               id: 40,
      //     //               name: "admin-show-advertisement",
      //     //               type: "admin",
      //     //               created_at: "2025-08-16T19:32:12.000000Z",
      //     //               updated_at: "2025-08-16T19:32:12.000000Z",
      //     //             },
      //     //             {
      //     //               id: 41,
      //     //               name: "admin-delete-advertisement",
      //     //               type: "admin",
      //     //               created_at: "2025-08-16T19:32:12.000000Z",
      //     //               updated_at: "2025-08-16T19:32:12.000000Z",
      //     //             },
      //     //             {
      //     //               id: 42,
      //     //               name: "admin-news-list",
      //     //               type: "admin",
      //     //               created_at: "2025-08-16T19:32:12.000000Z",
      //     //               updated_at: "2025-08-16T19:32:12.000000Z",
      //     //             },
      //     //             {
      //     //               id: 43,
      //     //               name: "admin-create-news",
      //     //               type: "admin",
      //     //               created_at: "2025-08-16T19:32:12.000000Z",
      //     //               updated_at: "2025-08-16T19:32:12.000000Z",
      //     //             },
      //     //             {
      //     //               id: 44,
      //     //               name: "admin-update-news",
      //     //               type: "admin",
      //     //               created_at: "2025-08-16T19:32:12.000000Z",
      //     //               updated_at: "2025-08-16T19:32:12.000000Z",
      //     //             },
      //     //             {
      //     //               id: 45,
      //     //               name: "admin-show-news",
      //     //               type: "admin",
      //     //               created_at: "2025-08-16T19:32:12.000000Z",
      //     //               updated_at: "2025-08-16T19:32:12.000000Z",
      //     //             },
      //     //             {
      //     //               id: 46,
      //     //               name: "admin-delete-news",
      //     //               type: "admin",
      //     //               created_at: "2025-08-16T19:32:12.000000Z",
      //     //               updated_at: "2025-08-16T19:32:12.000000Z",
      //     //             },
      //     //           ],
      //     //         },
      //     //       ],
      //     //     },
      //     //     "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vODIuMjUuMTAxLjU2OjEyMTIvYXBpL2Rhc2hib2FyZC92MS9hdXRoL2xvZ2luIiwiaWF0IjoxNzU2MTI4OTQ3LCJleHAiOjE3NTk3Mjg5NDcsIm5iZiI6MTc1NjEyODk0NywianRpIjoiRXJFM3phTmJBYmpycXVjUSIsInN1YiI6IjEyIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.7ik8T5AO1nrYdsumuNr37ZasmDuQL-Au572vGtQPNDY"
      //     //   );
      //     //   router.push("/");
      //     // },
      //     // onError: () => {
      //     //   notifications.show({
      //     //     position: "top-right",
      //     //     title: t("login.loginError"),
      //     //     message: t("login.loginError"),
      //     //     color: "red",
      //     //     icon: <IconAlertCircle />,
      //     //   });
      //     // },
      //   }
      // );
      setAuth(
        {
          id: 12,
          name: "يوسف عدي",
          phone: "07829476806",
          type: "admin",
          created_at: "2025-08-24T07:06:06.000000Z",
          updated_at: "2025-08-24T07:06:06.000000Z",
          roles: [
            {
              id: 1,
              name: "Admin",
              type: "admin",
              created_at: "2025-08-16T19:32:11.000000Z",
              updated_at: "2025-08-16T19:32:11.000000Z",
              permissions: [
                {
                  id: 1,
                  name: "admin-templates-list",
                  type: "admin",
                  created_at: "2025-08-16T19:32:11.000000Z",
                  updated_at: "2025-08-16T19:32:11.000000Z",
                },
                {
                  id: 2,
                  name: "admin-create-template",
                  type: "admin",
                  created_at: "2025-08-16T19:32:11.000000Z",
                  updated_at: "2025-08-16T19:32:11.000000Z",
                },
                {
                  id: 3,
                  name: "admin-update-template",
                  type: "admin",
                  created_at: "2025-08-16T19:32:11.000000Z",
                  updated_at: "2025-08-16T19:32:11.000000Z",
                },
                {
                  id: 4,
                  name: "admin-show-template",
                  type: "admin",
                  created_at: "2025-08-16T19:32:11.000000Z",
                  updated_at: "2025-08-16T19:32:11.000000Z",
                },
                {
                  id: 5,
                  name: "admin-delete-template",
                  type: "admin",
                  created_at: "2025-08-16T19:32:11.000000Z",
                  updated_at: "2025-08-16T19:32:11.000000Z",
                },
                {
                  id: 6,
                  name: "admin-organizations-list",
                  type: "admin",
                  created_at: "2025-08-16T19:32:11.000000Z",
                  updated_at: "2025-08-16T19:32:11.000000Z",
                },
                {
                  id: 7,
                  name: "admin-create-organization",
                  type: "admin",
                  created_at: "2025-08-16T19:32:11.000000Z",
                  updated_at: "2025-08-16T19:32:11.000000Z",
                },
                {
                  id: 8,
                  name: "admin-update-organization",
                  type: "admin",
                  created_at: "2025-08-16T19:32:11.000000Z",
                  updated_at: "2025-08-16T19:32:11.000000Z",
                },
                {
                  id: 9,
                  name: "admin-show-organization",
                  type: "admin",
                  created_at: "2025-08-16T19:32:11.000000Z",
                  updated_at: "2025-08-16T19:32:11.000000Z",
                },
                {
                  id: 10,
                  name: "admin-delete-organization",
                  type: "admin",
                  created_at: "2025-08-16T19:32:11.000000Z",
                  updated_at: "2025-08-16T19:32:11.000000Z",
                },
                {
                  id: 11,
                  name: "admin-members-list",
                  type: "admin",
                  created_at: "2025-08-16T19:32:11.000000Z",
                  updated_at: "2025-08-16T19:32:11.000000Z",
                },
                {
                  id: 12,
                  name: "admin-create-member",
                  type: "admin",
                  created_at: "2025-08-16T19:32:11.000000Z",
                  updated_at: "2025-08-16T19:32:11.000000Z",
                },
                {
                  id: 13,
                  name: "admin-update-member",
                  type: "admin",
                  created_at: "2025-08-16T19:32:11.000000Z",
                  updated_at: "2025-08-16T19:32:11.000000Z",
                },
                {
                  id: 14,
                  name: "admin-show-member",
                  type: "admin",
                  created_at: "2025-08-16T19:32:11.000000Z",
                  updated_at: "2025-08-16T19:32:11.000000Z",
                },
                {
                  id: 15,
                  name: "admin-delete-member",
                  type: "admin",
                  created_at: "2025-08-16T19:32:11.000000Z",
                  updated_at: "2025-08-16T19:32:11.000000Z",
                },
                {
                  id: 16,
                  name: "admin-identities-list",
                  type: "admin",
                  created_at: "2025-08-16T19:32:11.000000Z",
                  updated_at: "2025-08-16T19:32:11.000000Z",
                },
                {
                  id: 17,
                  name: "admin-create-identity",
                  type: "admin",
                  created_at: "2025-08-16T19:32:11.000000Z",
                  updated_at: "2025-08-16T19:32:11.000000Z",
                },
                {
                  id: 18,
                  name: "admin-update-identity",
                  type: "admin",
                  created_at: "2025-08-16T19:32:11.000000Z",
                  updated_at: "2025-08-16T19:32:11.000000Z",
                },
                {
                  id: 19,
                  name: "admin-show-identity",
                  type: "admin",
                  created_at: "2025-08-16T19:32:11.000000Z",
                  updated_at: "2025-08-16T19:32:11.000000Z",
                },
                {
                  id: 20,
                  name: "admin-delete-identity",
                  type: "admin",
                  created_at: "2025-08-16T19:32:11.000000Z",
                  updated_at: "2025-08-16T19:32:11.000000Z",
                },
                {
                  id: 21,
                  name: "admin-users-list",
                  type: "admin",
                  created_at: "2025-08-16T19:32:11.000000Z",
                  updated_at: "2025-08-16T19:32:11.000000Z",
                },
                {
                  id: 22,
                  name: "admin-create-user",
                  type: "admin",
                  created_at: "2025-08-16T19:32:11.000000Z",
                  updated_at: "2025-08-16T19:32:11.000000Z",
                },
                {
                  id: 23,
                  name: "admin-update-user",
                  type: "admin",
                  created_at: "2025-08-16T19:32:11.000000Z",
                  updated_at: "2025-08-16T19:32:11.000000Z",
                },
                {
                  id: 24,
                  name: "admin-show-user",
                  type: "admin",
                  created_at: "2025-08-16T19:32:11.000000Z",
                  updated_at: "2025-08-16T19:32:11.000000Z",
                },
                {
                  id: 25,
                  name: "admin-delete-user",
                  type: "admin",
                  created_at: "2025-08-16T19:32:11.000000Z",
                  updated_at: "2025-08-16T19:32:11.000000Z",
                },
                {
                  id: 26,
                  name: "admin-organization-users-list",
                  type: "admin",
                  created_at: "2025-08-16T19:32:12.000000Z",
                  updated_at: "2025-08-16T19:32:12.000000Z",
                },
                {
                  id: 27,
                  name: "admin-create-organization-user",
                  type: "admin",
                  created_at: "2025-08-16T19:32:12.000000Z",
                  updated_at: "2025-08-16T19:32:12.000000Z",
                },
                {
                  id: 28,
                  name: "admin-update-organization-user",
                  type: "admin",
                  created_at: "2025-08-16T19:32:12.000000Z",
                  updated_at: "2025-08-16T19:32:12.000000Z",
                },
                {
                  id: 29,
                  name: "admin-show-organization-user",
                  type: "admin",
                  created_at: "2025-08-16T19:32:12.000000Z",
                  updated_at: "2025-08-16T19:32:12.000000Z",
                },
                {
                  id: 30,
                  name: "admin-delete-organization-user",
                  type: "admin",
                  created_at: "2025-08-16T19:32:12.000000Z",
                  updated_at: "2025-08-16T19:32:12.000000Z",
                },
                {
                  id: 31,
                  name: "admin-roles-list",
                  type: "admin",
                  created_at: "2025-08-16T19:32:12.000000Z",
                  updated_at: "2025-08-16T19:32:12.000000Z",
                },
                {
                  id: 32,
                  name: "admin-create-role",
                  type: "admin",
                  created_at: "2025-08-16T19:32:12.000000Z",
                  updated_at: "2025-08-16T19:32:12.000000Z",
                },
                {
                  id: 33,
                  name: "admin-update-role",
                  type: "admin",
                  created_at: "2025-08-16T19:32:12.000000Z",
                  updated_at: "2025-08-16T19:32:12.000000Z",
                },
                {
                  id: 34,
                  name: "admin-show-role",
                  type: "admin",
                  created_at: "2025-08-16T19:32:12.000000Z",
                  updated_at: "2025-08-16T19:32:12.000000Z",
                },
                {
                  id: 35,
                  name: "admin-delete-role",
                  type: "admin",
                  created_at: "2025-08-16T19:32:12.000000Z",
                  updated_at: "2025-08-16T19:32:12.000000Z",
                },
                {
                  id: 36,
                  name: "admin-permissions-list",
                  type: "admin",
                  created_at: "2025-08-16T19:32:12.000000Z",
                  updated_at: "2025-08-16T19:32:12.000000Z",
                },
                {
                  id: 37,
                  name: "admin-advertisements-list List",
                  type: "admin",
                  created_at: "2025-08-16T19:32:12.000000Z",
                  updated_at: "2025-08-16T19:32:12.000000Z",
                },
                {
                  id: 38,
                  name: "admin-create-advertisement",
                  type: "admin",
                  created_at: "2025-08-16T19:32:12.000000Z",
                  updated_at: "2025-08-16T19:32:12.000000Z",
                },
                {
                  id: 39,
                  name: "admin-update-advertisement",
                  type: "admin",
                  created_at: "2025-08-16T19:32:12.000000Z",
                  updated_at: "2025-08-16T19:32:12.000000Z",
                },
                {
                  id: 40,
                  name: "admin-show-advertisement",
                  type: "admin",
                  created_at: "2025-08-16T19:32:12.000000Z",
                  updated_at: "2025-08-16T19:32:12.000000Z",
                },
                {
                  id: 41,
                  name: "admin-delete-advertisement",
                  type: "admin",
                  created_at: "2025-08-16T19:32:12.000000Z",
                  updated_at: "2025-08-16T19:32:12.000000Z",
                },
                {
                  id: 42,
                  name: "admin-news-list",
                  type: "admin",
                  created_at: "2025-08-16T19:32:12.000000Z",
                  updated_at: "2025-08-16T19:32:12.000000Z",
                },
                {
                  id: 43,
                  name: "admin-create-news",
                  type: "admin",
                  created_at: "2025-08-16T19:32:12.000000Z",
                  updated_at: "2025-08-16T19:32:12.000000Z",
                },
                {
                  id: 44,
                  name: "admin-update-news",
                  type: "admin",
                  created_at: "2025-08-16T19:32:12.000000Z",
                  updated_at: "2025-08-16T19:32:12.000000Z",
                },
                {
                  id: 45,
                  name: "admin-show-news",
                  type: "admin",
                  created_at: "2025-08-16T19:32:12.000000Z",
                  updated_at: "2025-08-16T19:32:12.000000Z",
                },
                {
                  id: 46,
                  name: "admin-delete-news",
                  type: "admin",
                  created_at: "2025-08-16T19:32:12.000000Z",
                  updated_at: "2025-08-16T19:32:12.000000Z",
                },
              ],
            },
          ],
        },
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vODIuMjUuMTAxLjU2OjEyMTIvYXBpL2Rhc2hib2FyZC92MS9hdXRoL2xvZ2luIiwiaWF0IjoxNzU2MTI4OTQ3LCJleHAiOjE3NTk3Mjg5NDcsIm5iZiI6MTc1NjEyODk0NywianRpIjoiRXJFM3phTmJBYmpycXVjUSIsInN1YiI6IjEyIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.7ik8T5AO1nrYdsumuNr37ZasmDuQL-Au572vGtQPNDY"
      );
      router.push("/");
    }

    if (!phone) {
      setPhone(values.phone);
      await sendOTP.mutateAsync({ phone: values.phone });
    }
  });

  return (
    <Container
      bg="#f8f9fa"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      size="xs"
      py={80}
      mih="100vh"
      miw="100vw"
    >
      <Paper w="100%" maw={500} p="xl" shadow="md" radius="md" withBorder>
        <Stack gap="lg">
          <Center>
            <Stack gap="xs" align="center">
              <IconLogin size={48} color="var(--mantine-color-blue-6)" />
              <Title order={2} ta="center" fw={600}>
                {t("login.title")}
              </Title>
              <Text size="sm" c="dimmed" ta="center">
                {t("login.subtitle")}
              </Text>
            </Stack>
          </Center>

          <form onSubmit={handleSubmit}>
            <Stack gap="md">
              <TextInput
                label={t("phoneNumber")}
                placeholder={t("phoneNumber")}
                leftSection={<IconPhone size={16} />}
                size="md"
                radius="md"
                key={form.key("phone")}
                {...form.getInputProps("phone")}
              />
              {phone && (
                <NumberInput
                  label={t("login.otp")}
                  placeholder={t("login.otp")}
                  leftSection={<IconAlertCircle size={16} />}
                  rightSection=" "
                  size="md"
                  radius="md"
                  key={form.key("otp")}
                  {...form.getInputProps("otp")}
                />
              )}

              <Button
                type="submit"
                size="md"
                radius="md"
                fullWidth
                loading={login.isPending}
                leftSection={<IconLogin size={18} />}
                mt="md"
              >
                {login.isPending
                  ? t("login.signingIn")
                  : t("login.submitButton")}
              </Button>
            </Stack>
          </form>
        </Stack>
      </Paper>
    </Container>
  );
}
