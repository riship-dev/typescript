type string_or_number = string | number; // union

interface Business_Partner {
    name: string;
}
interface Contact_Details {
    email: string;
    phone: string;
}

type Business_Contact = Business_Partner & Contact_Details; // intersection