import React from "react";
import { DSTypography_H3, DSTypography_Text } from "../../utils";
import { CardInfo, Container } from "./styles";

export interface CardProps {
  imagePath: string;
  title: string;
  overview: string;
}

export function Card({ imagePath, title, overview }: CardProps) {
  return (
    <Container role="article" aria-labelledby={title}>
      <img
        src={imagePath}
        alt={`${title} image`}
        fetchPriority="high"
        aria-hidden={true}
      />
      <CardInfo>
        <DSTypography_H3 id={title}>{title}</DSTypography_H3>
        <DSTypography_Text>{overview}</DSTypography_Text>
      </CardInfo>
    </Container>
  );
}
