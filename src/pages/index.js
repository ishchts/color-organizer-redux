import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { PageTemplate } from './pageTemplate'




export const Home = () => (
    <PageTemplate>
        <section className="home">
            <h1>[Home Page]</h1>
        </section>
    </PageTemplate>
)



export const About = () => (
    <PageTemplate>
        <section className="about">
            <h1>[About the Company]</h1>
        </section>
    </PageTemplate>
)

export const Events = () =>
    <PageTemplate>
        <section className="events">
            <h1>[Events Calendar]</h1>
        </section>
    </PageTemplate>

export const Products = () =>
    <PageTemplate>
        <section className="products">
            <h1>[Products Catalog]</h1>
        </section>
    </PageTemplate>

export const Contact = () =>
    <PageTemplate>
        <section className="contact">
            <h1>[Contact Us]</h1>
        </section>
    </PageTemplate>


export const Whoops404 = (props) => {
    console.log(props);
    const { location } = props;
    return (
        <div className="whoops-404">
            <h1>Resource not found at '{location.pathname}'</h1>
        </div>
    )
}