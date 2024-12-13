-- Mock data for the user you provided (ID: 6c03bacc-4ef8-48ae-949b-e50a4c5bde1d)

-- Insert user stats
INSERT INTO public.user_stats (
    user_id,
    total_searches,
    monthly_searches,
    last_search_at,
    subscription_tier,
    subscription_status,
    subscription_end_date
) VALUES (
    '6c03bacc-4ef8-48ae-949b-e50a4c5bde1d',
    25,
    12,
    NOW(),
    'professional',
    'active',
    NOW() + INTERVAL '1 year'
);

-- Insert some mock searches
INSERT INTO public.searches (
    user_id,
    query,
    filters,
    created_at,
    result_count
) VALUES 
    ('6c03bacc-4ef8-48ae-949b-e50a4c5bde1d', 'John Smith', '{"city": "New York", "state": "NY"}', NOW() - INTERVAL '1 day', 5),
    ('6c03bacc-4ef8-48ae-949b-e50a4c5bde1d', 'Sarah Johnson', '{"city": "Los Angeles", "state": "CA"}', NOW() - INTERVAL '2 days', 3),
    ('6c03bacc-4ef8-48ae-949b-e50a4c5bde1d', 'Michael Brown', '{"city": "Chicago", "state": "IL"}', NOW() - INTERVAL '3 days', 7),
    ('6c03bacc-4ef8-48ae-949b-e50a4c5bde1d', 'Emily Davis', '{"city": "Houston", "state": "TX"}', NOW() - INTERVAL '4 days', 2),
    ('6c03bacc-4ef8-48ae-949b-e50a4c5bde1d', 'Robert Wilson', '{"city": "Phoenix", "state": "AZ"}', NOW() - INTERVAL '5 days', 4);

-- Insert some mock saved profiles
INSERT INTO public.saved_profiles (
    user_id,
    profile_data,
    notes,
    created_at,
    updated_at
) VALUES 
    (
        '6c03bacc-4ef8-48ae-949b-e50a4c5bde1d',
        '{
            "full_name": "John Smith",
            "other_fields": {
                "address": "123 Main St",
                "city": "New York",
                "st": "NY",
                "dob": "19850315"
            },
            "sensitive_fields": {
                "ssn": "123456789"
            }
        }',
        'Person of interest in investigation',
        NOW() - INTERVAL '1 day',
        NOW() - INTERVAL '1 day'
    ),
    (
        '6c03bacc-4ef8-48ae-949b-e50a4c5bde1d',
        '{
            "full_name": "Sarah Johnson",
            "other_fields": {
                "address": "456 Oak Ave",
                "city": "Los Angeles",
                "st": "CA",
                "dob": "19900522"
            },
            "sensitive_fields": {
                "ssn": "987654321"
            }
        }',
        'Follow up required',
        NOW() - INTERVAL '2 days',
        NOW() - INTERVAL '2 days'
    );