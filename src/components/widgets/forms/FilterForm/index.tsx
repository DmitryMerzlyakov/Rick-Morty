import { SearchImage } from "@/assets/icons"
import { Input } from "@/components/ui"
import { useSearchQueryParams } from "@/hooks/useSearch";
import { IGeneralQuery } from "@/models/interfaces";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";

export const FilterForm = () => {
  const { createSearch } = useSearchQueryParams();
  const { register, watch, getValues } = useForm<IGeneralQuery>();

  useEffect(() => {
    createSearch({
      name: getValues("name") as string
    })
  }, [watch("name")])

  return (
    <div className="">
      <Input
        inputPlaceholder="Filter by name..."
        iconPlaceholder={<SearchImage />}
        {...register("name")}
      />
    </div>
  )
}
