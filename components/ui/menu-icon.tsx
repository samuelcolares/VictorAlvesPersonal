"use client";
import React from "react";
import styled, { css } from "styled-components";

const Animated = styled.div<AnimatedMenu>`
  width: 48px;
  height: 48px;
  cursor: pointer;
  position: relative;

  span {
    width: 60%;
    background: ${(props) => props.$bg};
    border-radius: 10px;
    height: 12%;
    transition: 0.15s cubic-bezier(1, 0.01, 0.01, 1);
    position: absolute;
  }

  span:nth-of-type(1) {
    top: 4px;
    right: 0;
  }

  span:nth-of-type(2) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  span:nth-of-type(3) {
    bottom: 4px;
    left: 0;
  }

  ${(props) =>
    props.$animated &&
    css`
      span {
        background: #f5f5f5 !important;
      }
      span:nth-of-type(1) {
        width: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(405deg);
      }

      span:nth-of-type(2) {
        width: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-405deg);
      }

      span:nth-of-type(3) {
        width: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(405deg);
      }
    `}
`;

type AnimatedMenu = {
  $animated: boolean;
  $bg: string;
};

const MenuIcon = ({
  open,
  fill = "#fafafa",
}: {
  open: boolean;
  fill?: string;
}) => {
  return (
    <Animated $animated={open} $bg={fill}>
      <span className="transition" />
      <span className="transition" />
      <span className="transition" />
    </Animated>
  );
};

export default MenuIcon;
