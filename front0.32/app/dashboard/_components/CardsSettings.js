"use client";
import React from 'react';

import { Separator } from "@/components/ui/separator"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"


  import { cn } from "@/lib/utils"
  import { Button } from "@/components/ui/button"
  import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
  } from "@/components/ui/command"
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"

import { Check, ChevronsUpDown } from "lucide-react";



const CardsSettings = () => {
    // Component logic goes here

    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    const rags = [
        {
          value: "cgi_global",
          label: "CGI Global",
        },
        {
          value: "architect",
          label: "Architect",
        },
        {
          value: "engie",
          label: "Engie",
        },
        {
          value: "personal",
          label: "Personal",
        },
      ]

    return (
        // JSX markup for the component goes here
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Dashboard Settings</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardTitle className='text-sm'>General</CardTitle>
                    <CardDescription>
                        <div className="flex flex-col">
                            <div className="flex flex-row">
                                <div className="flex items-center">
                                    <label className="text-sm text-gray-600 mr-3">Language : </label>
                                    <select className="mt-1 w-40 border border-gray-300 rounded-md p-1">
                                        <option>English</option>
                                        <option>French</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </CardDescription>
                </CardContent>
                <Separator />
                <CardContent>
                    <CardTitle className='text-sm mt-5'>RAG options</CardTitle>
                    <CardDescription>
                        <div className="flex flex-col">
                            <div className="flex flex-row">
                                <div className="flex items-center">
                                    <label className="text-sm text-gray-600 mr-3">Manage your RAGs : </label>
                                    <Popover open={open} onOpenChange={setOpen}>
                                        <PopoverTrigger asChild>
                                            <Button
                                            variant="outline"
                                            role="combobox"
                                            aria-expanded={open}
                                            className="w-[300px] justify-between"
                                            >
                                            {value
                                                ? rags.find((rag) => rag.value === value)?.label
                                                : "Select a rag that you want to delete"}
                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-[200px] p-0">
                                            <Command>
                                            <CommandInput placeholder="Search rag..." />
                                            <CommandEmpty>No rag found.</CommandEmpty>
                                            <CommandGroup>
                                                {rags.map((rag) => (
                                                <CommandItem
                                                    key={rag.value}
                                                    value={rag.value}
                                                    onSelect={(currentValue) => {
                                                    setValue(currentValue === value ? "" : currentValue)
                                                    setOpen(false)
                                                    }}
                                                >
                                                    <Check
                                                    className={cn(
                                                        "mr-2 h-4 w-4",
                                                        value === rag.value ? "opacity-100" : "opacity-0"
                                                    )}
                                                    />
                                                    {rag.label}
                                                </CommandItem>
                                                ))}
                                            </CommandGroup>
                                            </Command>
                                        </PopoverContent>
                                    </Popover>
                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                        <Button variant='outline' className='w-[150px] ml-3'> Delete</Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                            <AlertDialogTitle>Confirm RAG deletion</AlertDialogTitle>
                                            <AlertDialogDescription>
                                                This action cannot be undone. If continue, your RAG will be deleted.
                                            </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                            <AlertDialogAction>Continue</AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
  
                                </div>

                            </div>
                        </div>
                    </CardDescription>
                    <CardDescription>
                        <div className="flex flex-col mt-5">
                            <div className="flex flex-row">
                                <div className="flex items-center">
                                    <label className="text-sm text-gray-600 mr-3">Add a RAG : </label>
                                    <Button variant='outline' className='w-[200px]'> Add</Button>
                                </div>
                            </div>
                        </div>
                    </CardDescription>
                </CardContent>
                <Separator />
                <CardContent>
                    <CardTitle className='text-sm mt-5'>Conversations</CardTitle>
                    <CardDescription>
                        <div className="flex flex-col">
                            <div className="flex flex-row">
                                <div className="flex items-center">
                                    <label className="text-sm text-gray-600 mr-3">Delete all your conversations : </label>
                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                        <Button variant='outline' className='w-[150px] ml-3'> Delete</Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                            <AlertDialogTitle>Delete all your conversations</AlertDialogTitle>
                                            <AlertDialogDescription>
                                                This action will remove completly all your conversations. Are you sure about that ?
                                            </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                            <AlertDialogAction>Continue</AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </div>
                            </div>
                        </div>
                    </CardDescription>
                </CardContent>
            </Card>
        </div>
    );
};

export default CardsSettings;