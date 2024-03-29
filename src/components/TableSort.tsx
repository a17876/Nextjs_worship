"use client";
import { useState } from "react";
import {
  Table,
  ScrollArea,
  UnstyledButton,
  Group,
  Text,
  Center,
  TextInput,
  rem,
  keys,
} from "@mantine/core";
import {
  IconSelector,
  IconChevronDown,
  IconChevronUp,
  IconSearch,
} from "@tabler/icons-react";
import classes from "./TableSort.module.css";
import data from "@/db/fakedb";

interface RowData {
  id: number;
  title: string;
  code: string;
  reference: string;
  sheet:string;
}

interface ThProps {
  children: React.ReactNode;
  reversed: boolean;
  sorted: boolean;
  onSort(): void;
}

function Th({ children, reversed, sorted, onSort }: ThProps) {
  const Icon = sorted
    ? reversed
      ? IconChevronUp
      : IconChevronDown
    : IconSelector;
  return (
    <Table.Th className={classes.th}>
      <UnstyledButton onClick={onSort} className={classes.control}>
        <Group justify="space-between">
          <Text fw={500} fz="sm">
            {children}
          </Text>
          <Center className={classes.icon}>
            <Icon style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </Center>
        </Group>
      </UnstyledButton>
    </Table.Th>
  );
}

function filterData(data: RowData[], search: string) {
    const query = search.toLowerCase().trim();
    return data.filter((item) =>
      keys(data[0]).some((key) => {
        const fieldValue = item[key];
        if (typeof fieldValue === 'string') { // 문자열 타입인 경우에만 toLowerCase 호출
          return fieldValue.toLowerCase().includes(query);
        }
        return false; // 문자열이 아닌 경우에는 false 반환
      })
    );
  }

  function sortData(
    data: RowData[],
    payload: { sortBy: keyof RowData | null; reversed: boolean; search: string }
  ) {
    const { sortBy } = payload;
  
    if (!sortBy) {
      return filterData(data, payload.search);
    }
  
    return filterData(
      [...data].sort((a, b) => {
        const aValue = a[sortBy];
        const bValue = b[sortBy];
        if (typeof aValue === 'string' && typeof bValue === 'string') {
          if (payload.reversed) {
            return bValue.localeCompare(aValue);
          } else {
            return aValue.localeCompare(bValue);
          }
        }
        return 0; 
      }),
      payload.search
    );
  }

export function TableSort() {
  const [search, setSearch] = useState("");
  const [sortedData, setSortedData] = useState(data);
  const [sortBy, setSortBy] = useState<keyof RowData | null>(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

  const setSorting = (field: keyof RowData) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(sortData(data, { sortBy: field, reversed, search }));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedData(
      sortData(data, { sortBy, reversed: reverseSortDirection, search: value })
    );
  };

  const rows = sortedData.map((row) => (
    <Table.Tr key={row.id}>
      <Table.Td>{row.id}</Table.Td>
      <Table.Td>{row.title}</Table.Td>
      <Table.Td>{row.code}</Table.Td>
      <Table.Td>{row.reference}</Table.Td>
    </Table.Tr>
  ));

  return (
    <ScrollArea>
      <TextInput
        placeholder="Search by any field"
        mb="md"
        leftSection={
          <IconSearch
            style={{ width: rem(16), height: rem(16) }}
            stroke={1.5}
          />
        }
        value={search}
        onChange={handleSearchChange}
      />
      <Table
        horizontalSpacing="md"
        verticalSpacing="xs"
        miw={700}
        layout="fixed"
      >
        <Table.Tbody>
          <Table.Tr>
            <Th
              sorted={sortBy === "id"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("id")}
            >
              No.
            </Th>
            <Th
              sorted={sortBy === "title"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("title")}
            >
              Title
            </Th>
            <Th
              sorted={sortBy === "code"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("code")}
            >
              Code
            </Th>
            <Th
              sorted={sortBy === "reference"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("reference")}
            >
              Reference
            </Th>
          </Table.Tr>
        </Table.Tbody>
        <Table.Tbody>
          {rows.length > 0 ? (
            rows
          ) : (
            <Table.Tr>
              <Table.Td colSpan={Object.keys(data[0]).length}>
                <Text fw={500} ta="center">
                  Nothing found
                </Text>
              </Table.Td>
            </Table.Tr>
          )}
        </Table.Tbody>
      </Table>
    </ScrollArea>
  );
}
