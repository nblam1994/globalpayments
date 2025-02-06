**Current Failed Tests Summary**

- Credentials On file Preauth/Auth Compeletion with card V2
    - Description: 
        ```
        To test the ability of the POS solution to generate a manually entered initial Credential on File Storage Visa pre-authorization transaction and populate the correct fields in the authorization request message. There are two transactions in this eCommerce test case: a pre-authorization and a pre-authorization completion.

        - Market Data
        - AVS and CVV Result Codes
        ```
    - Test Procedure:
        ```
        Initial Credential on File Keyed Pre-Authorization
        - Use Visa test card V2 (Step 1 of 2)
        - Perform a keyed pre-authorization for $8.53
        - Use AVS 3032920104 CORPORATE SQ
        - Use CVV Data 123

        Credential on File Keyed Pre-Authorization Completion
        - Use Visa test card V2 (Step 2 of 2)
        - Perform a keyed pre-authorization completion for $8.53
        ```
    - file: initial-credential-on-file-preauth-v2.ts
    - Issue:
        - Fails after authorization
            ```
            CVV2/CVC2/CID Data is "(sp)(sp)(sp)123"
            ```

- Credentials On file Preauth/Auth Compeletion with card V3
    - Description: 
        ```
        To test the ability of the POS solution to generate a manually entered initial Credential on File Storage Visa pre-authorization transaction and populate the correct fields in the authorization request message. There are two transactions in this eCommerce test case: a pre-authorization and a pre-authorization completion.

        -Market Data
        -AVS and CVV Result Codes
        ```
    - Test Procedure:
        ```
        Initial Credential on File Keyed Pre-Authorization
        - Use Visa test card V3 (Step 1 of 2)
        - Perform a keyed pre-authorization for $7.53
        - Use AVS 3032920104 CORPORATE SQ
        - Use CVV Data 123

        Initial Credential on File Keyed Pre-Authorization Completion
        - Use Visa test card V3 (Step 2 of 2)
        - Perform a keyed pre-authorization completion for $7.53
        ```
    - file: initial-credential-on-file-preauth-v3.ts
    - Issue:
        - Fails after authorization
            ```
            CVV2/CVC2/CID Data is "(sp)(sp)(sp)123"
            ```

- Subsequence recurring Credentials on File PreAuth Completion V2
    - Description:
        ```
        To test the ability of the POS solution to generate a manually entered subsequent Credential on File Recurring Visa pre-authorization transaction and populate the correct fields in the authorization request message. There are two transactions in this eCommerce test case: a pre-authorization and a pre-authorization completion.

        -Market Data
        -AVS and CVV Result Codes
        ```
    - Test Procedure:
        ```
        Subsequent Recurring Credential on File Keyed Pre-Authorization
        - Use Visa test card V2(Step 1 of 2)
        - Perform a subsequent recurring keyed pre-authorization for $9.53
        - Use AVS 3032920104 CORPORATE SQ
        - Use CVV Data 123
        - Use Market Data aDc000011k552
        - Include CardBrandTxnId from the Initial COF response

        Subsequent Credential on File Keyed Pre-Authorization Completion
        - Use Visa test card V2 (Step 2 of 2)
        - Perform a keyed subsequent recurring pre-authorization completion for $9.53
        ```
    - file: subsequence-recurring-credential-on-file-v2.ts
    - issues:
        - Failures after first step
            ```
            POS Entry Mode Pos. 5 = 4 Recurring Billing    
            ```
        - Failures after second step
            ```
            POS Entry Mode Pos. 5 = 4 Recurring Billing
            POS Entry Mode Pos. 7 = F Credential on File
            ```

- Subsequence recurring Credentials on File PreAuth Completion V3
    - Description:
        ```
        To test the ability of the POS solution to generate a manually entered recurring subsequent Credential on File Storage Visa pre-authorization transaction and populate the correct fields in the authorization request message. There are two transactions in this eCommerce test case: a pre-authorization and a pre-authorization completion.

        -Market Data
        -AVS and CVV Result Codes
        ```
    - Test Procedure:
        ```
        Subsequent Recurring Credential on File Keyed Pre-Authorization
        - Use Visa test card V3 (Step 1 of 2)
        - Perform a keyed pre-authorization for $10.87
        - Use AVS 3032920104 CORPORATE SQ
        - Use CVV Data 123
        - Use Market Data aDc000011k552
        - Include CardBrandTxnId from the Initial COF response

       Subsequent Recurring Credential on File Keyed Pre-Authorization Completion
        - Use Visa test card V3 (Step 2 of 2)
        - Perform a keyed pre-authorization completion for $10.87
        ```
    - file: subsequence-recurring-credential-on-file-v3.ts
    - issues:
        - Failures after first step
            ```
            POS Entry Mode Pos. 5 = 4 Recurring Billing
            POS Entry Mode Pos. 7 = F Credential on File
            Cardbrand Txn ID from initial storage
            ```
        - Failures after second step
            ```
            POS Entry Mode Pos. 5 = 4 Recurring Billing
            POS Entry Mode Pos. 7 = F Credential on File
            Cardbrand Txn ID from initial storage
            ```

- Subsequence recurring Credentials on File PreAuth Completion M1
    - Description:
        ```
       To test the ability of the POS solution to generate a manually entered recurring subsequent Credential on File Storage MasterCard pre-authorization transaction and populate the correct fields in the authorization request message. There are two transactions in this eCommerce test case: a pre-authorization and a pre-authorization completion.

        -Market Data
        -AVS and CVV Result Codes
        ```
    - Test Procedure:
        ```
        Subsequent Recurring Credential on File Keyed Pre-Authorization
        - Use MasterCard test card M1 (Step 1 of 2)
        - Perform a keyed recurring pre-authorization for $7.53
        - Use AVS 3032920104 CORPORATE SQ
        - Use CVV Data 123
        - Use Market Data aDc000011k552
        - Include CardBrandTxnId from the Initial COF response

        Subsequent Credential on File Keyed Pre-Authorization Completion
        - Use MasterCard test card M1 (Step 2 of 2)
        - Perform a keyed recurring pre-authorization completion for $7.53
        ```
    - file: subsequence-recurring-credential-on-file-m1.ts
    - issues: Code crashes after run, don't know why

- Preauth incremental
    - Description:
        ```
        To test the ability of the POS solution to generate a manually entered incremental MasterCard pre-authorization transaction and populate the correct fields in the authorization request message. There are two transactions in this eCommerce test case: a pre-authorization and a pre-authorization completion.

        -Market Data
        -AVS and CVV Result Codes
        ```
    - Test procedure:
        ```
        Keyed Pre-Authorization
        - Use MasterCard test card 2 (Step 1 of 3)
        - Perform a keyed pre-authorization for $9.94
        - Use AVS Data 303292010
        - Use CVV Data 123
        - Use Market Data aDc000011k552

        Keyed Pre-Authorization Completion
        - Use MasterCard test card M1 (Step 3 of 3)
        - Perform a keyed pre-authorization completion for $10.94
        ```
    - file: preauth-incremental-m2.ts
    - issues:
        - Server does not seem to get Pre-Authorization Completion result
            ```
            Acquirer Reference Data is present and valid (no result, either fail or pass)
            ```

- Parial Reversal
    - Description:
        ```
        To test the ability of the POS solution to partially reverse a previously generated Visa pre-authorization transaction There are three transactions in this eCommerce test case: a pre-authorization, a pre-authorization completion and a reversal.

        -Market Data
        -AVS and CVV Result Codes
        ```
    - Test procedure:
        ```
        Keyed Pre-Authorization
        - Use Visa test card V2 (Step 1 of 3)
        - Perform a keyed pre-authorization for $8.71
        - Use AVS Data 303292010
        - Use CVV Data 123
        - Use Market Data aDc000011k552

        Keyed Pre-Authorization Completion
        - Use Visa test card V2 (Step 2 of 3)
        - Perform a partial reversal of $1

        Keyed Full Reversal
        - Use isa test card V2 (Step 3 of 3) - Perform remaining reversal for $7.79.
        ```
    - file: preauth-partial-reversal-v2.ts
    - issues:
        - Failure after first step
            ```
            CVV2/CVC2/CID Data is "(sp)(sp)(sp)123" (fail)
            ```
        - Server does not seem to get the last reversal result
            ```
            Request message is present (no result, either fail or pass)
            ```
