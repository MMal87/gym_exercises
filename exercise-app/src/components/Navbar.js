import React from "react";
import { Stack } from "@mui/material";

import Image from "next/image";

import Link from "next/link";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px " },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link href="/">
        <Image
          src="/images/getstrong.png"
          alt="logo"
          width={70} // specify width
          height={70} // specify height
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "#fff",
            borderBottom: "3px solid #fff",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#fff" }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
