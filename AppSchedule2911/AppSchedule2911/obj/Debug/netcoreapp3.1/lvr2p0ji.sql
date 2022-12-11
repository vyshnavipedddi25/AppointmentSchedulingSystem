IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;

GO

CREATE TABLE [Appointment] (
    [Id] int NOT NULL IDENTITY,
    [FName] nvarchar(max) NOT NULL,
    [LName] nvarchar(max) NOT NULL,
    [Email] nvarchar(max) NULL,
    [Mobile] nvarchar(10) NOT NULL,
    [Date] datetime2 NOT NULL,
    [Time] nvarchar(max) NULL,
    [Confirm] nvarchar(max) NULL,
    CONSTRAINT [PK_Appointment] PRIMARY KEY ([Id])
);

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20221129170642_AppScheduleMig', N'3.1.30');

GO

