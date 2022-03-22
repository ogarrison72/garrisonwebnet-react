import { React } from "react";
import { HiLink } from "react-icons/hi";
import { MdLocationPin } from "react-icons/md";
import styled from "styled-components";

const LocationInfo = styled.span`
    /* Mobile styles */
    color: var(--accent-font-color);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-size: 0.85rem;

    /* Small tablet styles */
    @media screen and (min-width: 450px) {
    }

    @media screen and (min-width: 768px) {
    }

    /* Large tablet and laptop styles */
    @media screen and (min-width: 960px) {
    }

    /* Desktop styles */
    @media screen and (min-width: 1200px) {
    }
`;

const WebAddress = styled.a`
    /* Mobile styles */
    text-decoration: none;
    color: var(--accent-font-color);

    &:hover {
        color: var(--accent-font-color);
    }

    /* Small tablet styles */
    @media screen and (min-width: 450px) {
    }

    @media screen and (min-width: 768px) {
    }

    /* Large tablet and laptop styles */
    @media screen and (min-width: 960px) {
    }

    /* Desktop styles */
    @media screen and (min-width: 1200px) {
    }
`;

const GeoLocationPin = styled(MdLocationPin)`
    font-size: 1.25rem;
    margin-right: .5rem;
`;

const WebAddressLink = styled(HiLink)`
    font-size: 1.25rem;
    margin-right: 0.5rem;
`;

const LocationInformation = ({ geoLocation, webAddress }) => (
    <LocationInfo>
        <GeoLocationPin />
        {geoLocation}&nbsp;&nbsp;&nbsp;&nbsp;
        <WebAddress href={webAddress} target="_blank" rel="noreferrer">
            <WebAddressLink />
            {webAddress}
        </WebAddress>
    </LocationInfo>
);

export default LocationInformation;