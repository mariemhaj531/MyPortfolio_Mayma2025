<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Models\Contact;

class ContactController extends Controller
{
    public function sendMessage(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:100',
            'email' => 'required|email',
            'subject' => 'nullable|string|max:255',
            'message' => 'required|string',
        ]);
        $data = $request->only('name', 'email', 'subject', 'message');
        // Save the message to the database
        Contact::create($data);
        // Send email to the admin
        Mail::send('emails.contact', ['data' => $data], function ($message) use ($data) {
            $message->to(env('MAIL_FROM_ADDRESS'))
                    ->subject($data['subject'] ?? 'Nouveau message de portfolio');
            $message->from($data['email'], $data['name']);
        });
        return response()->json(['message' => 'Message sent successfully']);
    }
}
