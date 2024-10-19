import React from 'react';
import {
    Card,
    CardHeader,
    CardContent,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

import './DebtStatusWidget.css'; // Import the CSS file

export default function DebtStatusWidget() {
    return (
        <Card className="card-container">
            {/* Header Section */}
            <CardHeader>
                <CardTitle className="card-title">Debt and Status Check</CardTitle>
            </CardHeader>

            <Separator className="separator" />

            {/* Summary Section */}
            <CardContent className="summary-section">
                <div>
                    <p className="summary-label">Total Outstanding Debts</p>
                    <p className="summary-value text-green">$2,500,000</p>
                </div>
                <div>
                    <p className="summary-label">Unpaid Taxes</p>
                    <p className="summary-value text-red">$150,000</p>
                </div>
            </CardContent>

            {/* Debt Categories Section */}
            <CardContent className="categories-section">
                <div className="categories-grid">
                    <div className="category-card bg-green-light">
                        <p className="category-label">Loans</p>
                        <p className="category-value text-green-dark">$1,500,000</p>
                    </div>
                    <div className="category-card bg-yellow-light">
                        <p className="category-label">Invoices</p>
                        <p className="category-value text-yellow-dark">$800,000</p>
                    </div>
                    <div className="category-card bg-red-light">
                        <p className="category-label">Taxes</p>
                        <p className="category-value text-red-dark">$200,000</p>
                    </div>
                </div>

                {/* Notifications Section */}
                <Accordion type="single" collapsible className="notifications-section">
                    <AccordionItem value="upcoming-payments">
                        <AccordionTrigger className="accordion-trigger">
                            Upcoming Payments
                        </AccordionTrigger>
                        <AccordionContent>
                            <ul className="notifications-list">
                                <li>Tax payment due in 3 days</li>
                                <li>Loan repayment overdue by 5 days</li>
                                <li>Invoice from Supplier X awaiting payment</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                {/* Action Buttons */}
                <div className="actions-section">
                    <Button variant="primary" className="action-button">
                        Pay Now
                    </Button>
                    <Button variant="outline" className="action-button">
                        Set Up Reminder
                    </Button>
                    <Button variant="ghost" className="action-button">
                        View Details
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}